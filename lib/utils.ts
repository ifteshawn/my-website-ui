export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

// Client error message helper from API response
export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
};

// Client form validation helper
export const validateFormData = (formData: FormData) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  const initalErrorState = {error: false, message: ""};

  const errors: Record<string, { error: boolean; message: string }> = {};

  if (
    !formData.get("senderName") ||
    !nameRegex.test(formData.get("senderName") as string)
  ) {
    errors.senderName = {
      error: true,
      message: !formData.get("senderName")
        ? "Please enter your name."
        : "Please enter a valid name.",
    };
  } else {
    errors.senderName = initalErrorState;
  }

  if (
    !formData.get("senderEmail") ||
    !emailRegex.test(formData.get("senderEmail") as string)
  ) {
    errors.senderEmail = {
      error: true,
      message: !formData.get("senderEmail")
        ? "Please enter your email."
        : "Please enter a valid email.",
    };
  } else {
    errors.senderEmail = initalErrorState;
  }

  if (
    !formData.get("subject") ||
    String(formData.get("subject"))?.length > 500
  ) {
    errors.subject = {
      error: true,
      message: !formData.get("subject")
        ? "Please enter a subject."
        : "Subject must be less than 500 characters.",
    };
  } else {
    errors.subject = initalErrorState;
  }

  if (
    !formData.get("message") ||
    String(formData.get("message"))?.length > 5000
  ) {
    errors.message = {
      error: true,
      message: !formData.get("message")
        ? "Please enter a message."
        : "Message must be less than 5000 characters.",
    };
  } else {
    errors.message = initalErrorState;
  }
  return errors;
};
