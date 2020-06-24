import React, { useEffect, useState } from 'react';
import { Modal, Input, Form, Select,Cascader, Button } from 'antd';
import { queryItem } from "../service";
const CreateForm = props => {
  const { modalVisible, onCancel } = props;
  const [categories, setCategories] = useState([])
  useEffect(() => {
    queryItem().then(resp => {
      setCategories(resp.data)
    })
  },[])
  return (
    <Modal
      destroyOnClose
      title="新建分类"
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      <Form
        name="productFrom"
        layout="vertical"
        initialValues={{ remember: true }}
      >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Product name is required!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Descripton"
        name="description"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Parent Category"
        name="parent_id"
      >
      <Cascader
      options={categories}
      fieldNames={{ label: 'name', value: 'id', children: 'children' }}
      />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Modal>
  );
};

export default CreateForm;

