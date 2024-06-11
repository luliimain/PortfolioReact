import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
export default function NavBar() {
  return (
    <nav className='barra'>
      <Breadcrumb className='Breadcrumb'>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#head'>home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#cont'>content</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem >
          <BreadcrumbLink href='#foot'>footer</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

    </nav>
  )
}