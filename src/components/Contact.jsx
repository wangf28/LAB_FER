import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      program: 0,
      message: "",
      agree: false,
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      // Xử lý gửi form ở đây
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.number().integer().typeError("Please enter a valid number"),
      program: Yup.number().min(1, "Please select a program."),
      message: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit} className="container mt-5">
      <h1>CONTACT US</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            isInvalid={formik.touched.name && !!formik.errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            isInvalid={formik.touched.email && !!formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          isInvalid={formik.touched.phone && !!formik.errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.phone}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridProgram">
        <Form.Label>Program of Study</Form.Label>
        <Form.Select
          name="program"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.program}
          isInvalid={formik.touched.program && !!formik.errors.program}
        >
          <option value={0}>Please select</option>
          <option value={1}>Software Engineering</option>
          <option value={2}>Information System</option>
          <option value={3}>Information Assurance</option>
          <option value={4}>Internet of Things</option>
          <option value={5}>Artificial Intelligence</option>
          <option value={6}>Digital Art & Design</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {formik.errors.program}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          rows={4}
          isInvalid={formik.touched.message && !!formik.errors.message}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAgree">
        <Form.Check
          type="switch"
          label="Agree to terms and conditions"
          name="agree"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.agree}
          isInvalid={formik.touched.agree && !!formik.errors.agree}
          feedback={formik.errors.agree}
          feedbackType="invalid"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Send
      </Button>
    </Form>
  );
}

export default Contact;
