import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { memo } from "react";

interface CreateActionBtnProps {
	onClick?: () => void;
}

export const CreateActionBtn = memo((props: CreateActionBtnProps) => {
	return (
		<Button
			size="large"
			color="blue"
			variant="filled"
			icon={<PlusOutlined />}
			{...props}
		>
			Create Row
		</Button>
	);
});
