import "./collapsible.css"
import ResumeHeader from "./resumeHeader";
function CollpasibleMenu() {
    function collapse(event){
        event.preventDefault();
        const coll = document.getElementsByClassName("collapsible");
        for (let i = 0; i < coll.length; i++)
        {
            console.log(i);
            if(i === 1)
            {
                console.log("one");
            }
            coll[i].addEventListener("click",
                function() {
                    this.classList.toggle("active");
                    let content = this.nextElementSibling;
                    if(content.style.display === "block")
                    {
                        content.style.display = "none";
                    } else{
                        content.style.display = "block";
                    }
                });
        }
    }

    return (
        <>
        <button type="button" class = "collapsible" onClick ={collapse}>
            My Resume
        </button>
        <div class="content">
            <ResumeHeader/>
        </div>
        <br></br>
        <button type="button" class = "collapsible" onClick ={collapse}>
            Open Collapsible 2
        </button>
        <div class="content">
            <p>
                filler content 2
            </p>
        </div>
        <button type="button" class = "collapsible" onClick ={collapse}>
            Open Collapsible 3
        </button>
        <div class="content">
            <p>
                filler content 3
            </p>
        </div>
        </>
      );
  }

  export default CollpasibleMenu;