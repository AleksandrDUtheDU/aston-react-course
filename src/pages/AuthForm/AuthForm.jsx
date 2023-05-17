import { Controller, useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";

import {
  TextField,
  Checkbox,
  Typography,
  FormControl,
  FormControlLabel,
  Container,
} from "@mui/material";
import { data } from "../../shared/Data";
import { useState } from "react";
import useCurrentPath from "../../hooks/useCurrentPath";

const CustomTextField = styled(TextField)(() => ({
  margin: 15,
  minWidth: 250,
  maxWidth: 250,
}));

function AuthForm() {
  const [formData, setFormData] = useState(null);
  const currentPath = useCurrentPath();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      politicChecked: data.politicChecked,
    },
  });
  let renderCount = 0;
  renderCount++;
  const onSubmit = (data) => {
    setFormData(data);
    localStorage.setItem("formState", JSON.stringify(data));
    //navigate("/");
  };

  console.log(currentPath);

  return (
    <Container
      sx={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}
      maxWidth="sm"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography>Рендер: {renderCount}</Typography>
        <FormControl fullWidth>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <CustomTextField
                    {...field}
                    type="text"
                    id="standard-basic"
                    variant="standard"
                    label="Имя"
                  />
                }
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <CustomTextField
                    {...field}
                    type="text"
                    id="standard-basic"
                    variant="standard"
                    label="Фамилия"
                  />
                }
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <CustomTextField
                    {...field}
                    type="email"
                    id="standard-basic"
                    variant="standard"
                    label="Ваша почта"
                  />
                }
              />
            )}
          />
          <Controller
            name="politicChecked"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                labelPlacement="end"
                label="Согласен с политикой конфиденциальности"
                control={
                  <Checkbox
                    color="primary"
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                  />
                }
              />
            )}
          />
        </FormControl>
      </form>
    </Container>
  );
}

export default AuthForm;
