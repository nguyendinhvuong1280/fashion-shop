import { ActionIcon, Flex, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Header() {
    return (
        <Flex h={50} align='center' style={{ background: "#339AF0" }} justify='center'>
            <Flex w={1434} justify="space-between">
                <Flex>Hotline đặt hàng 18006013</Flex>
                <Flex align='center'>
                    <div to="#">Tra cứu tình trạng đơn hàng</div>
                    <div to="#">Hệ thống Showroom</div>
                    <Input
                        w={313}
                        style={{ background: "none" }}
                        rightSection={
                            <ActionIcon radius="xl" >
                                <IconSearch />
                            </ActionIcon>
                        }
                        placeholder="Tìm kiếm sản phẩm"
                        radius="xl"
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header;