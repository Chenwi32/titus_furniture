import { Breadcrumb, BreadcrumbItem, Container, } from "@chakra-ui/react";
import Link from "next/link";

const Breadcrm = () => {
    return (
    
      <Container mb={10}>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/livingroom">Living Room</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href="/diningroom">Dining Room</Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link href="/bed_room">Bed Room</Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link href="/homeoffice">Home Office</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>
        
      
    );
}

export default Breadcrm;