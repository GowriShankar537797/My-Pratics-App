import { Button, Card, Form } from 'react-bootstrap';
import '../../assets/stylesheets/pages/login.scss'

const Login = () => {
    return (
        
        <div className='login-container'>
            <div className='over-lay'></div>
            <Card className='login-form'>
                <span>Login to continue</span>
                <Form className='mt-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className='w-100 mt-5'>
                        Submit
                    </Button>
                </Form>
            </Card>
        </div >
    )
}

export default Login;