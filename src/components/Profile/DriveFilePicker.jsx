import React,{useEffect} from 'react'
import useDrivePicker from 'react-google-drive-picker'
import gdrive from "../../assets/gdrive.webp";
function DriveFilePicker() {
    
  const [openPicker,data,authResponse]=useDrivePicker();

  const handleClick=()=>{
    openPicker({
      clientId: "687826912462-d6vg873c90345g0t2rm68dles95q78rd.apps.googleusercontent.com",
      developerKey: "AIzaSyDwHpjxzWp8nN26e8FVkzf90aTLrZ4OxPc",
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data)
      },
    })
    

  }

//   useEffect(()=>{
//     if(data){
//       data.docs.map((i)=>console.log(i))
//     }
//   },[data]);
   
  return (
    <div>
      <button onClick={()=>handleClick()}><img src={gdrive} className=" w-[40px] ml-[10px] max-sm:w-[50px] max-sm:h-[40px]" /></button>
    </div>
  )
}

export default DriveFilePicker
