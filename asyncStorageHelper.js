import { AsyncStorage } from 'react-native';
const AsyncStorageKey = "@KEY_ACCESS_TOKEN"; //must be unique for your app

class AccessAsyncStore {
    constructor(){
        this._asyncData = null
        this.initialCall() // just to store initial data in this.__asyncData remove if your data is to big to store right after importing
    }

    initialCall = ()=>{
        AsyncStorage.getItem(AsyncStorageKey)
            .then((data)=>{
                if(data){
                    this._asyncData = JSON.parse(data)
                }
            })
            .catch((err)=> console('Error initializing asyncStore',err));
    }

    get(){
        return new Promise((next, error)=>{
            if(this._asyncData) return next(this._asyncData); // this will help to get token quickly and we dont call async again and again 
            AsyncStorage.getItem(AsyncStorageKey)
                .then((data)=>{
                    if(data){
                        this._asyncData = JSON.parse(data)
                        next(this._asyncData)
                    }else{
                        next(null);
                    }
                })
                .catch((err)=> error(err));
        })
    }

    set(data){
        return new Promise((next, error)=>{
            let dataHolder = data;
            if( data ){
                this._asyncData = data;
                if( (typeof dataHolder !== "string") ){ // just to check if data is string or object 
                    dataHolder = JSON.stringify(dataHolder);
                }
                AsyncStorage.setItem(AsyncStorageKey, dataHolder)
                    .then(()=>{
                        next(data);
                    })
                    .catch((err)=>error(err));
            }else{
                error('Error storing data to asyncStore.');
            }
        })
    }

    clear(){
        this._asyncData = null;
        return AsyncStorage.removeItem(AsyncStorageKey);
    }
}

export default new AccessAsyncStore();
