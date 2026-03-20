import type { DataTableType } from "@types";
import { DatePicker, Flex, Form, Input, InputNumber, Modal } from "antd";
import { memo } from "react";

interface ModalFormProps {
	initialValues: Partial<DataTableType.Row>;
	onFinish: (value: Partial<DataTableType.Row>) => void;
	title: string;
	open: boolean;
	onCancel: () => void;
}

export const ModalForm = memo(
	({ initialValues, onFinish, ...modalProps }: ModalFormProps) => {
		return (
			<Modal okText="Submit" {...modalProps}>
				<Form<DataTableType.Row>
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
							<InputNumber style={{ width: "100%" }} />
						</Form.Item>
					</Flex>
				</Form>
			</Modal>
		);
	},
);
