import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

//compoennts
import Sidebar from './layouts/sidebar'
import Header from './layouts/header'
import Dashboard from './pages/dashboard'
import Setting from './pages/settings'
import AddDreams from './pages/addDream'
import Dreams from './pages/dreams'


//styles
import { Row, Container, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container className="pt-5">
          <Row className="justify-content-center">
            <Col lg={7}>
         
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/add-new-dream" component={AddDreams} />
                <Route path="/dreams" component={Dreams} />
                <Route path="/setting" component={Setting} />
              </Switch>

            </Col>
            <Col lg={3} className="d-flex flex-column align-items-end text-right mt-5">
              <Sidebar />
            </Col>

          </Row>

        </Container>
      </Router>


    </div>
  );
}

export default App;
