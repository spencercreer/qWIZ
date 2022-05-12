import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { createUser } from '../utils/API';

const { Group, Label, Control } = Form

const SignupForm = () => {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await createUser(userFormData)
            console.log(response)
            if (!response.ok) {
                throw new Error('something went wrong!')
            }
        }
        catch (err) {
            console.error(err)
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    }

    return (
        <>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleFormSubmit}
            >
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your signup!
                </Alert>

                <Group>
                    <Label htmlFor='username'>Username</Label>
                    <Control
                        type='text'
                        placeholder='Your username'
                        name='username'
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                    />
                    <Control.Feedback type='invalid'>Username is required!</Control.Feedback>
                </Group>

                <Group>
                    <Label htmlFor='email'>Email</Label>
                    <Control
                        type='email'
                        placeholder='Your email address'
                        name='email'
                        onChange={handleInputChange}
                        value={userFormData.email}
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
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                    />
                    <Control.Feedback type='invalid'>Password is required!</Control.Feedback>
                </Group>
                <Button
                    disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default SignupForm