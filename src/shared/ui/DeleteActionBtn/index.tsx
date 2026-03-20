import { DeleteFilled } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { memo } from "react";

interface DeleteActionBtn<T> {
	action: (value: T) => void;
	value: T;
}

function DeleteBtn<T>({ action, value }: DeleteActionBtn<T>) {
	return (
		<Tooltip title="delete row">
			<Button
				size="large"
				shape="circle"
				color="pink"
				variant="filled"
				icon={<DeleteFilled />}
				onClick={() => action(value)}
			/>
		</Tooltip>
	);
}

export const DeleteActionBtn = memo(DeleteBtn) as typeof DeleteBtn;
