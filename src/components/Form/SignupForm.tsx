import { TextField, Stack, Box } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from './CustomButton'

const SignupForm = () => {
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        email: Yup.string().email('Invalid email').required('Required')
    })

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
            <Stack spacing={2}>
                <h1>Sign up</h1>
                <TextField
                    id='firstName'
                    name='firstName'
                    label='First name'
                    type='text'
                    onChange={formik.handleChange}
                    defaultValue={formik.values.firstName}
                    helperText={formik.errors?.firstName}
                    error={formik.errors?.firstName?.length > 0}
                />
                <TextField
                    id='lastName'
                    name='lastName'
                    label='Last name'
                    type='text'
                    onChange={formik.handleChange}
                    defaultValue={formik.values.lastName}
                    helperText={formik.errors?.lastName}
                    error={formik.errors?.lastName?.length > 0}
                />
                <TextField
                    id='email'
                    name='email'
                    label='E-mail'
                    type='text'
                    onChange={formik.handleChange}
                    defaultValue={formik.values.email}
                    helperText={formik.errors?.email}
                    error={formik.errors?.email?.length > 0}
                />
                <Box mt={2}>
                    <Button type='submit' variant='contained' sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </Box>
            </Stack>
        </form>
    )
}

export default SignupForm
