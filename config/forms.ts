export const honeyPotInput = {
  id: 1,
  name: 'goodToKnow',
  type: 'text',
  componentType: 'input',
  placeholder: 'Good to know value',
}

export const contactFormConfig = [
  {
    id: 1,
    name: 'fullName',
    type: 'text',
    placeholder: 'Full Name',
    componentType: 'input',
    validationSchema: {
      required: "A name is required",
      minLength: {
        value: 3,
        message: "Your full name must be more than 3 characters",
      },
      maxLength: {
        value: 30,
        message: "Your full name must be less than 30 characters",
      }
    }
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    componentType: 'input',
    validationSchema: {
      required: "Password is required",
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message: "Password must contain at least one uppercase letter, one lowercase letter and one number",
      }
    }
  },
  {
    id: 3,
    name: 'mobile',
    type: 'numeric',
    placeholder: 'Mobile Number',
    componentType: 'input',
    validationSchema: {
      required: "Mobile number is required",
      minLength: {
        value: 3,
        message: "Your phone number must be more than 3 characters",
      },
      maxLength: {
        value: 12,
        message: "Your phone number must be less than 12 characters",
      },
      pattern: {
        value: /^[0-9]+$/,
        message: "Mobile phone must be a number",
      }
    }
  },
  {
    id: 4,
    name: 'additionalInfo',
    type: 'text',
    placeholder: 'Tell us more',
    componentType: 'textarea',
    validationSchema: {
      required: "Let us know how we can help",
      minLength: {
        value: 2,
        message: "Your phone number must be more than 3 characters",
      },
      maxLength: {
        value: 250,
        message: "Your phone number must be less than 12 characters",
      },
    }
  }
];

export const contactForm = [
  {
    id: 1,
    name: 'fullName',
    type: 'text',
    placeholder: 'Full Name',
    validationSchema: {
      required: "A name is required",
      minLength: {
        value: 3,
        message: "Your full name must be more than 3 characters",
      },
      maxLength: {
        value: 30,
        message: "Your full name must be less than 30 characters",
      }
    }
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    validationSchema: {
      required: "Email is required",
    }
  },
  {
    id: 3,
    name: 'mobile',
    type: 'numeric',
    placeholder: 'Mobile Number',
    validationSchema: {
      required: "Mobile number is required",
      minLength: {
        value: 3,
        message: "Your phone number must be more than 3 characters",
      },
      maxLength: {
        value: 12,
        message: "Your phone number must be less than 12 characters",
      },
      pattern: {
        value: /^[0-9]+$/,
        message: "Mobile phone must be a number",
      }
    }
  },
  {
    id: 4,
    name: 'location',
    type: 'text',
    placeholder: 'Location',
    validationSchema: {
      required: "Location is required",
    }
  }, 
  {
    id: 5,
    name: 'additionalInfo',
    type: 'text',
    placeholder: 'Tell us more',
    componentType: 'textarea',
    validationSchema: {
      required: "Let us know how we can help",
      minLength: {
        value: 2,
        message: "Your phone number must be more than 3 characters",
      },
      maxLength: {
        value: 250,
        message: "Your phone number must be less than 12 characters",
      },
    }
  }
];

