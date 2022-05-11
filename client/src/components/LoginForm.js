import { Form, Button, Alert } from 'react-bootstrap';
const { Group, Label, Control } = Form
const LoginForm = () => {
    return (
        <>
            <Form
                noValidate
                // validated={validated}
                // onSubmit={handleFormSubmit}
            >
                <Alert
                    dismissible
                    // onClose={() => setShowAlert(false)}
                    // show={showAlert}
                    variant='danger'
                >
                    Something went wrong with your login credentials!
                </Alert>
                <Group>
                    <Label htmlFor='email'>Email</Label>
                    <Control
                        type='text'
                        placeholder='Your email'
                        name='email'
                        // onChange={handleInputChange}
                        // value={userFormData.email}
                        required
                    />
                    <Control.Feedback type='invalid'>Email is required!</Control.Feedback>
                </Group>

                <Group>
                    <Label htmlFor='password'>Password</Label>
                    <Control
                        type='password'
                        placeholder='Your password'
                        name='password'
                        // onChange={handleInputChange}
                        // value={userFormData.password}
                        required
                    />
                    <Control.Feedback type='invalid'>Password is required!</Control.Feedback>
                </Group>
                <Button
                    // disabled={!(userFormData.email && userFormData.password)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default LoginForm