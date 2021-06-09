import logo from './logo.svg';
import './App.css';
import header_component from './components/header.component';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <header_component />
        </header>
        <div className="grafana">
          <iframe src="http://10.242.148.48:3000/d-solo/K9vm_w6Mz/zabbix-servers?orgId=1&from=1623183640494&to=1623205240494&panelId=12" width="100%" height="300" frameborder="0" />
        </div>

      </div>
    </>
  );
}

export default App;
