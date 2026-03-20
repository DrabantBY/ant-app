import { EditFilled } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { memo } from "react";

interface UpdateActionBtn<T> {
	action: (value: T) => void;
	value: T;
}

function UpdateBtn<T>({ value, action }: UpdateActionBtn<T>) {
	return (
		<Tooltip title="update row">
			<Button
				size="large"
				shape="circle"
				color="purple"
				variant="filled"
				icon={<EditFilled />}
				onClick={() => action(value)}
			/>
		</Tooltip>
	);
}

export const UpdateActionBtn = memo(UpdateBtn) as typeof UpdateBtn;
