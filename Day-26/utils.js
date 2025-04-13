const bindRow = (rootE, data)=>{
    rootE.innerHTML +=`
    <div class="job-item" data-id="${data.id}">
            <div class="job-title ${data.completed ? "completed" :""} ">${data.title}</div>
            <div class="job-action">
                <button class="update-btn">Update</button>
                <button class="delete-btn">Delete</button>
            </div>
        </div>
    `
}

const bindRows = (rootE, rows)=>{
    rows.forEach(row => bindRow(rootE, row))
}

export {bindRows}