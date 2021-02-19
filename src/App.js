import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

//compoennts
import Sidebar from './layouts/sidebar'
import Header from './layouts/header'
import Dashboard from './pages/dashboard'
import Setting from './pages/settings'
import CreateDreams from './pages/createDream'
import Dreams from './pages/dreams'
import EditDream from './pages/editDream'

//styles
import './design/index.scss'
import { Row, Container, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="mb-3">
      <Router>
        <Header />
        <Container className="pt-5">
          <Row className="justify-content-center">
            <Col lg={7}>
         
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/add-new-dream" component={CreateDreams} />
                <Route path="/dreams" component={Dreams} />
                <Route path="/setting" component={Setting} />
                <Route path="/dream/:id" component={EditDream}/>
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
