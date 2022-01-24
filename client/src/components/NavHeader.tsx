import React from 'react'
import { Box } from '@chakra-ui/react'

const NavHeader = () => (
    <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        px={6}
        py={4}
        bg="blue100"
    >
        <div style={{ fontWeight: 600 }}>Interest calculator</div>
    </Box>
)

export default NavHeader
