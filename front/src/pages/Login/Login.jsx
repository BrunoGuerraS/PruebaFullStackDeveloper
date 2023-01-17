import { Box, Container, Text, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import './Login.scss'

function Login() {
    const { register, handleSubmit, formState: {errors}} = useForm()
    const { user, setUser } = useState()
    const onSubmit = (data) => {
        console.log(data)
    }


  return (
    <Container 
        bg={''}
        w={"100%"} 
        h={"100vh"}
        p={'20px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        >
      <Box 
        bg={""}
        w={'50%'}
        m={'0 auto'}
        border={'1px back solid'}
        >
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Text>User:</Text>
            <Input {...register('user')}/>

            <Text>Password:</Text>
            <Input type={'password'} {...register('password')} />
            <Button type="submit" >Entrar</Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
