import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function FormSignUpComponent() {
  const wait = function (duration = 1000) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, duration);
    });
  };
  const schema = yup
    .object({
      username: yup.string().required(),
      email: yup.email().string().required(),
      password: yup.string().min(4).required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
      isSubmitted,
      isSubmitting,
      isSubmitSuccessful,
    },
    setError,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await wait(2000);
    setError("username", { type: "manual", message: "DO NOT WORK SERV" });
    console.log(data);
  };

  console.log({ isSubmitted, isSubmitSuccessful });
  console.log(errors);
  return (
    <>
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        {isSubmitSuccessful && (
          <div className="alert alert-primary">
            Merci pour votre inscription
          </div>
        )}
        <div className="col-md-4">
          <label htmlFor="username" className="form-label">
            Nom d'utilisateur
          </label>
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            id="username"
            aria-describedby="basic-addon1"
            name="username"
            {...register("username", {
              required: "Nom d'utilisateur obligatoire",
              maxLength: {
                value: 20,
                message: "Nom d'utilisateur ne peut pas dépasser 20 caractères",
              },
              minLength: {
                value: 4,
                message: "Nom d'utilisateur doit avoir au moins 4 caractères",
              },
              pattern: {
                value: /^[a-zA-Z0-9_-]+$/,
                message:
                  "Nom d'utilisateur ne peut contenir que des lettres, des chiffres, des tirets ou des underscores",
              },
            })}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>

        <div className="col-md-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            {...register("email", {
              required: "Email obligatoire",
              maxLength: {
                value: 255,
                message: "Email ne peut pas dépasser 255 caractères",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email doit être au format valide",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="col-md-4">
          <label htmlFor="password" className="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            {...register("password", {
              required: "Mot de passe obligatoire",
              minLength: {
                value: 8,
                message: "Mot de passe doit avoir au moins 8 caractères",
              },
              maxLength: {
                value: 20,
                message: "Mot de passe ne peut pas dépasser 20 caractères",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Mot de passe doit contenir au moins une lettre et un chiffre",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button
          type="submit"
          className="btn btn-primary my-4"
          disabled={isSubmitting}
        >
          S'inscrire
        </button>
      </form>
    </>
  );
}
