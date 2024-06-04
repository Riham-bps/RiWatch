import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function FormLoginComponent() {
  const wait = function (duration = 1000) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, duration);
    });
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email obligatoire")
      .email("Email doit être au format valide")
      .max(255, "Email ne peut pas dépasser 255 caractères"),
    password: yup
      .string()
      .required("Mot de passe obligatoire")
      .min(8, "Mot de passe doit avoir au moins 8 caractères")
      .max(20, "Mot de passe ne peut pas dépasser 20 caractères")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
        "Mot de passe doit contenir au moins une lettre et un chiffre"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await wait(2000);

    localStorage.setItem("userData", JSON.stringify(data));
    console.log("Data saved to localStorage:", data);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col-12 col-md-6 mx-auto"
        >
          {isSubmitSuccessful && (
            <div className="alert alert-info">Merci pour votre inscription</div>
          )}

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              aria-describedby="emailHelp"
              name="email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-primary">
                <i className="bi bi-info-circle-fill"></i>{" "}
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              name="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-primary">
                <i className="bi bi-info-circle-fill"></i>{" "}
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary my-4 w-100 "
            disabled={isSubmitting}
          >
            Se connecter
          </button>
        </form>
      </div>
    </>
  );
}
