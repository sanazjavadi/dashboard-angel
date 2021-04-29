import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { useGlobalContext } from './state/authContext/context'

//compoennts
import Sidebar from './layouts/sidebar'
import Header from './layouts/header'
import Dashboard from './pages/dashboard'
import Setting from './pages/settings'
import CreateDreams from './pages/createDream'
import Dreams from './pages/dreams'
import EditDream from './pages/editDream'
import SignUp from './pages/Auth'

//styles
import './design/index.scss'
import { Row, Container, Col } from 'react-bootstrap'

function App() {
  const { user } = useGlobalContext()
  console.log(user)
  return (
    <div className="mb-3">
      <Router>
      
        {
          user ? 
          <>
          <Header />
          <Container className="pt-5">
            <Row className="justify-content-center">
              <Col lg={7}>

                <Switch>

                  <Route exact path="/" component={Dashboard} />
                  <Route path="/add-new-dream" component={CreateDreams} />
                  <Route path="/dreams" component={Dreams} />
                  <Route path="/setting" component={Setting} />
                  <Route path="/dream/:id" component={EditDream} />
              
                </Switch>

              </Col>
              <Col lg={3} className="d-flex flex-column align-items-end text-right mt-5">
                <Sidebar />
              </Col>

            </Row>

          </Container>
          </>
            :
           
                <Switch>
                  <Route path="/" component={SignUp} />
                </Switch>

         

       
        }

      </Router>


    </div>
  );
}

export default App;
