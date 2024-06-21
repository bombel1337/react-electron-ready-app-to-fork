import './topbar.css'

function Topbar() {
  let title = document.getElementById('title').innerHTML;

  return (
    <div id="topbar">
      <div className="topbar-titleShown">{title}</div>
      <div className="topbar-buttons">
        <div className="topbar-minimize-app-button">
          <span>-</span>
        </div>
        <div className="topbar-maximize-app-button">
          <span>+</span>
        </div>
        <div className="topbar-close-app-button">
          <span>&times;</span>
        </div>
      </div>
    </div>
  )
}

export default Topbar
