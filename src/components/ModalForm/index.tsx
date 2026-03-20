import type { DataTableType } from "@types";
import { DatePicker, Flex, Form, Input, InputNumber, Modal } from "antd";
import { useId } from "react";

interface ModalFormProps {
	title: string;
	open: boolean;
	initialValues?: DataTableType.Row;
	onCancel: () => void;
	onOk: () => void;
	onFinish: (value: DataTableType.Row) => void;
}

export const ModalForm = ({
	initialValues,
	onFinish,
	...modalProps
}: ModalFormProps) => {
	const formId = useId();
	return (
		<Modal
			destroyOnHidden
			okText="Submit"
			mask={false}
			{...modalProps}
			okButtonProps={{ size: "large", htmlType: "submit", form: formId }}
			cancelButtonProps={{ size: "large" }}
		>
			<Form<DataTableType.Row>
				id={formId}
				layout="vertical"
				size="large"
				initialValues={initialValues}
				onFinish={onFinish}
			>
				<Form.Item
					label="Name"
					name="name"
					rules={[{ required: true, message: "name is required" }]}
				>
					<Input />
				</Form.Item>

				<Flex gap="small">
					<Form.Item
						label="Date"
						name="date"
						rules={[{ required: true, message: "date is required" }]}
						style={{ flexGrow: 1 }}
					>
						<DatePicker style={{ width: "100%" }} />
					</Form.Item>

					<Form.Item
						label="Salary"
						name="salary"
						rules={[{ required: true, message: "date is required" }]}
						style={{ flexGrow: 1 }}
					>
						<InputNumber style={{ width: "100%" }} min={0} />
					</Form.Item>
				</Flex>
			</Form>
		</Modal>
	);
};
