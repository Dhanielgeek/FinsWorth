
import { Modal, Form, Input} from 'antd';

const CreateBudget = ({ visible,onCancel,onCreate}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Create a new budget"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true, message: 'Please input the amount!' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="budgetType"
          label="Budget Type"
          rules={[{ required: true, message: 'Please input the budget type!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateBudget;
