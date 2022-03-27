import React from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Checkbox,
  Radio,
  Space,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  CompassOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { signup } from "../utils";

class SignupForm extends React.Component {
  formRef = React.createRef();

  state = {
    //弹窗
    displayModal: false,
    asNGO: false,
    loading: false,
  };

  signupOnclick = () => {
    this.setState({
      displayModal: true,
    });
  };

  handleCancel = () => {
    this.setState({
      displayModal: false,
    });
  };

  onFinish = () => {
    {
      this.setState({
        displayModal: false,
      });
    }
  };

  handleDonatorChange = () => {
    this.setState({
      asNGO: false,
    });
  };

  handleNGOChange = () => {
    this.setState({
      asNGO: true,
    });
  };

  handleSubmit = async () => {
    const formInstance = this.formRef.current;
    try {
      await formInstance.validateFields();
    } catch (error) {
      return;
    }

    this.setState({
      loading: true,
    });

    try {
      await signup(formInstance.getFieldsValue(true), this.state.asNGO);
      message.success("Sign Up Successfully!");
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
    console.log("submit");
  };

  // onFinish = (data) => {
  //   signup(data)
  //     .then(() => {
  //       this.setState({
  //         displayModal: false,
  //       });
  //       message.success(`Successfully Signed Up!`);
  //     })
  //     .catch((err) => {
  //       message.error(err.message);
  //     });
  // };

  // addNGO = () => {
  //   let x = document.getElementById("extraNgo");
  //   x.style.display = "block";
  // };

  // removeNGO = () => {
  //   let x = document.getElementById("extraNgo");
  //   x.style.display = "none";
  // };
  renderNGOSignUp = () => {
    return (
      <Form
            name="normal_signup"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            // preserve={flase}
          >
            {/* email */}
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                disabled={this.state.loading}
              />
            </Form.Item>

            {/* password */}
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                placeholder="Password"
                disabled={this.state.loading}
              />
            </Form.Item>

            {/* username */}
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Please input your name!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Name"
                disabled={this.state.loading}
              />
            </Form.Item>

            {/* phone number */}
            <Form.Item
              name="contact"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Phone Number"
                disabled={this.state.loading}
              />
            </Form.Item>

            {/* address */}
            <Form.Item
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input
                prefix={<HomeOutlined />}
                placeholder="Address"
                disabled={this.state.loading}
              />
            </Form.Item>

            {/* status */}
            <Form.Item
              name="radio-button"
              label="Status"
              rules={[{ required: true, message: "Please pick one!" }]}
            >
              <Radio.Group>
                <Radio value="Donator" onChange={this.handleDonatorChange}>
                  Donator
                </Radio>
                <Radio value="NGO" onChange={this.handleNGOChange}>
                  NGO
                </Radio>
              </Radio.Group>
            </Form.Item>

            {/* extra ego info */}
            {/* <Form.List name="extraInfo">
              <Form.Item
                name="radio-button"
                label="Status"
                rules={[{ required: true, message: "Please pick one!" }]}
              >
                <Radio.Group>
                  <Radio value="Donator" onClick={this.removeNGO}>
                    Donator
                  </Radio>
                  <Radio value="NGO" onClick={this.addNGO}>
                    NGO
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <div name="extraNgo">
                <Form.Item>1</Form.Item>
                <Form.Item>2</Form.Item>
              </div>
            </Form.List> */}

            {/* preffered pick-up radius */}
            <Form.Item
              name="radius"
              rules={[
                {
                  required: true,
                  message: "Please input preffered pick-up radius!",
                },
              ]}
              label="Pick-up radius"
            >
              <InputNumber
                prefix={<CompassOutlined />}
                // placeholder="Pick-up radius"
                disabled={this.state.loading}
                addonAfter="KM"
                defaultValue={0}
              />
            </Form.Item>

            {/* prefered pick-up weight */}
            <Form.Item
              name="weight"
              rules={[
                {
                  required: true,
                  message: "Please input preffered pick-up weight!",
                },
              ]}
              label="Pick-up weight"
            >
              <InputNumber
                prefix={<ShoppingOutlined />}
                // placeholder="Pick-up weight"
                disabled={this.state.loading}
                addonAfter="KG"
                defaultValue={0}
              />
            </Form.Item>

            <Button
              type="primary"
              disabled={this.state.loading}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Form>
    )
  }
  renderSignUpContent = () => {
    if (this.state.asNGO) {
      return this.renderNGOSignUp();
    }
    return <div>Donor page</div>
  }
  render = () => {
    return (
      <>
        <Button type="danger" size={"large"} onClick={this.signupOnclick}>
          Sign Up
        </Button>

        <Modal
          title="SIGN UP"
          visible={this.state.displayModal}
          onCancel={this.handleCancel}
          footer={null}
          destroyOnClose={true}
        >
        <Button type="danger" size={"small"} onClick={this.signupOnclick}>
          Ngo
        </Button>
        <Button type="danger" size={"small"} onClick={this.signupOnclick}>
          Donor
        </Button>
        </Modal>
      </>
    );
  };
}

export default SignupForm;