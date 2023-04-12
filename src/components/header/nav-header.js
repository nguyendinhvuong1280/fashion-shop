import { Flex, Tabs } from "@mantine/core";
import { Heart, ShoppingCart, UserCircle } from 'tabler-icons-react';

function NavHeader() {
    return (
        <Flex h={100} align='center' style={{ background: "#F8F9FA" }} justify='center'>
            <Flex w={1434} justify="space-between" align="center" gap="xl">
                <Flex>Logo</Flex>
                <Flex>
                    <Tabs defaultValue="gallery" style={{ fontWeight: "bold" }}>
                        <Tabs.List>
                            <Tabs.Tab value="HÀNG MỚI VỀ" >HÀNG MỚI VỀ</Tabs.Tab>
                            <Tabs.Tab value="THỜI TRANG" >THỜI TRANG</Tabs.Tab>
                            <Tabs.Tab value="SALE OFF" >SALE OFF</Tabs.Tab>
                            <Tabs.Tab value="BỘ SƯU TẬP" >BỘ SƯU TẬP</Tabs.Tab>
                            <Tabs.Tab value="TIN TỨC" >TIN TỨC</Tabs.Tab>
                            <Tabs.Tab value="VỀ GUMAC" >VỀ GUMAC</Tabs.Tab>
                        </Tabs.List>
                    </Tabs>
                </Flex>
                <Flex justify="space-between" gap="xl">
                    <UserCircle
                        size={40}
                        strokeWidth={1}
                        color={'black'}
                    />
                    <Heart
                        size={40}
                        strokeWidth={1}
                        color={'black'}
                    />
                    <ShoppingCart
                        size={40}
                        strokeWidth={1}
                        color={'black'}
                    />
                </Flex>
            </Flex>

        </Flex >
    )
}

export default NavHeader;