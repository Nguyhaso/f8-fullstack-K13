import {getData, postData, deleteData, putData} from "./api.js"
import {bindRows} from "./utils.js";

const jobListE = document.querySelector(".job-list");
const inputE = document.querySelector("input");
const saveBtn = document.querySelector("#save");

const onMounted = async ()=>{
    jobListE.innerHTML = "";
    //get data from api
    const jobs = await  getData()
    console.log(jobs)
    // bind data to DOM
    bindRows(jobListE, jobs)
}

const onSave =async ()=>{
    //get data from input
     const inputValue = inputE.value
    // body
    const body={
        title: inputValue,
        completed: false,
    }
   await postData('',body)
    console.log(JSON.stringify(body))
    await onMounted();
     inputE.value = "";

}

saveBtn.addEventListener("click", ()=>{
    onSave()
})

jobListE.addEventListener("click", async (event)=>{
    const jobItem = event.target.closest(".job-item");
    if(!jobItem) return
    const titleJobE = jobItem.querySelector(".job-title");
    const jobId = jobItem.getAttribute("data-id");

    //check finish task
    if (jobItem && !event.target.classList.contains("delete-btn") && !event.target.classList.contains("update-btn"))

        {
        const completed = titleJobE.classList.contains("completed")
        const body = {
            title : titleJobE.innerText,
            completed : !completed
        }
        console.log(titleJobE)
        await putData(jobId,body)
        await onMounted()
    }

    //delete function
    if(event.target.classList.contains("delete-btn")) {
        await deleteData(jobId)
        await onMounted()

    }
    // update function
    else if(event.target.classList.contains("update-btn")){
        const oldJob = titleJobE.innerText
        const newJob = prompt("Please change new task if you want", oldJob);
        if (newJob !== null && newJob !== "") {
            const body ={
                title : newJob,
                completed: false,
            }
            await putData(jobId,body)
            await onMounted();
        }


    }

})

onMounted();