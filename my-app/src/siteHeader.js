import "./siteHeader.css"
function SiteHeader({name}) {
    return (
        <>
            <div className = "hugeSiteHeader">
                {name}
            </div>
        </>
      );
  }
  
  export default SiteHeader;