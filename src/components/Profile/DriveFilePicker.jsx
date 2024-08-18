import React,{useEffect} from 'react'
import useDrivePicker from 'react-google-drive-picker'
import gdrive from "../../assets/gdrive.webp";
function DriveFilePicker() {
    
  const [openPicker,data,authResponse]=useDrivePicker();

  //below down is the api for gdrive file picker please do create your own apikey for 
  //the custormer to upload file i have created this using my gmail id
  //so you create this with the company id
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
      <button onClick={()=>handleClick()} className='h-[20px] pt-[2px]'><img src={gdrive} className=" w-[40px]  max-sm:w-[50px] " /></button>
    </div>
  )
}

export default DriveFilePicker
