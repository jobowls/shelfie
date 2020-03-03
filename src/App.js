import React, {Component} from 'react'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header/Header'
import HomeIcon from '@material-ui/icons/Home'
import ReceiptIcon from '@material-ui/icons/Receipt'
import NotificationsIcon from '@material-ui/icons/Notifications'
import SettingsIcon from '@material-ui/icons/Settings'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows'
import Sidebar from './Components/Sidebar/Sidebar'
// import AddShoppingCart from '@material-ui/icons/AddShoppingCart'

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const items = [
  { name: "home", label: "Home", Icon: HomeIcon },
  {
    name: "favorites",
    label: "Favorites",
    Icon: ReceiptIcon,
  },
  "divider",
  {
    name: "settings",
    label: "Settings",
    Icon: SettingsIcon,
    items: [
      { name: "profile", label: "Profile" },
      "divider",
      {
        name: "notifications",
        label: "Notifications",
        Icon: NotificationsIcon,
        items: [
          { name: "email", label: "Email", onClick },
          {
            name: "desktop",
            label: "Desktop",
            Icon: DesktopWindowsIcon,
            items: [
              { name: "schedule", label: "Schedule" },
              { name: "frequency", label: "Frequency" }
            ]
          },
          { name: "sms", label: "SMS" }
        ]
      }
    ]
  }
];

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Header />
        <div id='main-shop'>
          <Sidebar id='sidebar' items={items} />
          {routes}
        </div>
          <footer>
            <div id='footer'>
              <div>
                <h4>Freshly Picked Prints</h4>
              </div>
                <div id='footlinks'>
                  <span>Instagram</span>
                  <a id='etsy' href='https://www.etsy.com/shop/FreshlyPickedPrints?ref=seller-platform-mcnav'>
                  <span>Etsy Shop</span>
                  </a>
                  <span>Contact</span>
                </div>
            </div>
          </footer>
        </div>
      </HashRouter>
    )
  }
}
export default App