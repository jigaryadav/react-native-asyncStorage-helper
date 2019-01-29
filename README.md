
# react native async storage helper
Not a rock breaking stuff. Just to make you life easy with asyncStorage with no dependancy just copy the file and done.

# Installation
download the file or just copy the code into you application 

> note: don't forgot to change asyncStorage key inside the file

    import AccessStore from 'FILE_PATH_HERE'
# set
set  data in asyncStorage. it will return the saved object 

> note: don't stringify the data  just pass a object or string

    AccessStore.set('FAKE_TOKEN')
    .then((res, err)=>{
	    console.log({res, err})
    })
    .catch((error)=>{
	    console.log(error)
    })
# get
get  data from asyncStorage. it will return a parsed object/string. 

***this will give you data based on pervious data that has been saved into a class object  `_asyncData`  so no actual asyncStorage calls again and again which is time saver and also increase somewhat of performance***

 

    AccessStore.get()
    .then((res, err)=>{
	    console.log({res, err})
    })
    .catch((error)=>{
	    console.log(error)
    })

# clear/ remove/ delete
delete the asyncStorage 

      AccessStore.clear()



you can also get the data directly from a class by calling `AccessStore._asyncData` this will give you a local data stored inside the class. this method is not recommended but if  you want data synchronously then you can use this 
_asyncData
