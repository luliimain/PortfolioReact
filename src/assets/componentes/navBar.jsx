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
          <BreadcrumbLink href='#head'><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" className='logosBarra' viewBox="0 -0.5 25 25" fill="none">
            <path d="M3.15585 7.88246C2.78782 8.07252 2.64355 8.52495 2.83362 8.89298C3.02369 9.26102 3.47612 9.40528 3.84415 9.21522L3.15585 7.88246ZM6.09415 8.05322C6.46218 7.86315 6.60645 7.41072 6.41638 7.04269C6.22631 6.67466 5.77388 6.53039 5.40585 6.72046L6.09415 8.05322ZM5.40611 6.72033C5.038 6.91025 4.89356 7.36263 5.08349 7.73073C5.27342 8.09883 5.72579 8.24327 6.09389 8.05335L5.40611 6.72033ZM8.475 5.98084L8.8189 6.64735L8.82004 6.64675L8.475 5.98084ZM16.525 5.98084L16.18 6.64676L16.1811 6.64735L16.525 5.98084ZM18.9061 8.05335C19.2742 8.24327 19.7266 8.09883 19.9165 7.73073C20.1064 7.36263 19.962 6.91025 19.5939 6.72033L18.9061 8.05335ZM6.5 7.38684C6.5 6.97262 6.16421 6.63684 5.75 6.63684C5.33579 6.63684 5 6.97262 5 7.38684H6.5ZM5.75 14.8188L6.49925 14.8523C6.49975 14.8411 6.5 14.83 6.5 14.8188H5.75ZM9.558 18.9998L9.5215 19.7489C9.53366 19.7495 9.54583 19.7498 9.558 19.7498V18.9998ZM15.443 18.9998V19.7498C15.4552 19.7498 15.4675 19.7495 15.4797 19.7489L15.443 18.9998ZM19.25 14.8188H18.5C18.5 14.83 18.5002 14.8412 18.5007 14.8523L19.25 14.8188ZM20 7.38684C20 6.97262 19.6642 6.63684 19.25 6.63684C18.8358 6.63684 18.5 6.97262 18.5 7.38684H20ZM19.5941 6.72046C19.2261 6.53039 18.7737 6.67466 18.5836 7.04269C18.3936 7.41072 18.5378 7.86315 18.9059 8.05322L19.5941 6.72046ZM21.1559 9.21522C21.5239 9.40528 21.9763 9.26102 22.1664 8.89298C22.3564 8.52495 22.2122 8.07252 21.8441 7.88246L21.1559 9.21522ZM3.84415 9.21522L6.09415 8.05322L5.40585 6.72046L3.15585 7.88246L3.84415 9.21522ZM6.09389 8.05335L8.81889 6.64735L8.1311 5.31433L5.40611 6.72033L6.09389 8.05335ZM8.82004 6.64675C11.1277 5.45108 13.8723 5.45108 16.18 6.64675L16.87 5.31492C14.1297 3.89503 10.8703 3.89503 8.12996 5.31492L8.82004 6.64675ZM16.1811 6.64735L18.9061 8.05335L19.5939 6.72033L16.8689 5.31433L16.1811 6.64735ZM5 7.38684V14.8188H6.5V7.38684H5ZM5.00075 14.7854C4.88389 17.4024 6.90493 19.6215 9.5215 19.7489L9.5945 18.2507C7.803 18.1634 6.41924 16.6441 6.49925 14.8523L5.00075 14.7854ZM9.558 19.7498H15.443V18.2498H9.558V19.7498ZM15.4797 19.7489C18.0958 19.6208 20.1161 17.402 19.9993 14.7854L18.5007 14.8523C18.5808 16.6438 17.1975 18.163 15.4063 18.2507L15.4797 19.7489ZM20 14.8188V7.38684H18.5V14.8188H20ZM18.9059 8.05322L21.1559 9.21522L21.8441 7.88246L19.5941 6.72046L18.9059 8.05322ZM13.75 11.9998C13.75 12.6902 13.1904 13.2498 12.5 13.2498V14.7498C14.0188 14.7498 15.25 13.5186 15.25 11.9998H13.75ZM12.5 13.2498C11.8096 13.2498 11.25 12.6902 11.25 11.9998H9.75C9.75 13.5186 10.9812 14.7498 12.5 14.7498V13.2498ZM11.25 11.9998C11.25 11.3095 11.8096 10.7498 12.5 10.7498V9.24984C10.9812 9.24984 9.75 10.4811 9.75 11.9998H11.25ZM12.5 10.7498C13.1904 10.7498 13.75 11.3095 13.75 11.9998H15.25C15.25 10.4811 14.0188 9.24984 12.5 9.24984V10.7498Z" fill="#000000" />
          </svg></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#cont'><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" className='logosBarra' viewBox="0 0 28 28" fill="none">
            <path d="M4 5.25C4 3.45508 5.45507 2 7.25 2H20.75C22.5449 2 24 3.45507 24 5.25V17.3787C23.8796 17.4592 23.7653 17.5527 23.659 17.659L22.5 18.818V5.25C22.5 4.2835 21.7165 3.5 20.75 3.5H7.25C6.2835 3.5 5.5 4.2835 5.5 5.25V22.7497C5.5 23.7162 6.2835 24.4997 7.25 24.4997H15.3177L16.8177 25.9997H7.25C5.45507 25.9997 4 24.5446 4 22.7497V5.25Z" fill="#212121" />
            <path d="M10.5 8.75C10.5 9.44036 9.94036 10 9.25 10C8.55964 10 8 9.44036 8 8.75C8 8.05964 8.55964 7.5 9.25 7.5C9.94036 7.5 10.5 8.05964 10.5 8.75Z" fill="#212121" />
            <path d="M9.25 15.2498C9.94036 15.2498 10.5 14.6902 10.5 13.9998C10.5 13.3095 9.94036 12.7498 9.25 12.7498C8.55964 12.7498 8 13.3095 8 13.9998C8 14.6902 8.55964 15.2498 9.25 15.2498Z" fill="#212121" />
            <path d="M9.25 20.5C9.94036 20.5 10.5 19.9404 10.5 19.25C10.5 18.5596 9.94036 18 9.25 18C8.55964 18 8 18.5596 8 19.25C8 19.9404 8.55964 20.5 9.25 20.5Z" fill="#212121" />
            <path d="M12.75 8C12.3358 8 12 8.33579 12 8.75C12 9.16421 12.3358 9.5 12.75 9.5H19.25C19.6642 9.5 20 9.16421 20 8.75C20 8.33579 19.6642 8 19.25 8H12.75Z" fill="#212121" />
            <path d="M12 13.9998C12 13.5856 12.3358 13.2498 12.75 13.2498H19.25C19.6642 13.2498 20 13.5856 20 13.9998C20 14.414 19.6642 14.7498 19.25 14.7498H12.75C12.3358 14.7498 12 14.414 12 13.9998Z" fill="#212121" />
            <path d="M12.75 18.5C12.3358 18.5 12 18.8358 12 19.25C12 19.6642 12.3358 20 12.75 20H19.25C19.6642 20 20 19.6642 20 19.25C20 18.8358 19.6642 18.5 19.25 18.5H12.75Z" fill="#212121" />
            <path d="M25.7803 19.7803L19.7803 25.7803C19.6397 25.921 19.4489 26 19.25 26C19.0511 26 18.8603 25.921 18.7197 25.7803L15.7216 22.7823C15.4287 22.4894 15.4287 22.0145 15.7216 21.7216C16.0145 21.4287 16.4894 21.4287 16.7823 21.7216L19.25 24.1893L24.7197 18.7197C25.0126 18.4268 25.4874 18.4268 25.7803 18.7197C26.0732 19.0126 26.0732 19.4874 25.7803 19.7803Z" fill="#212121" />
          </svg></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem >
          <BreadcrumbLink href='#foot'><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="23px" height="23px" className='logosBarra' viewBox="0 0 24 24"><path d="M20,1H4A1,1,0,0,0,3,2V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V2A1,1,0,0,0,20,1ZM19,21H5V3H19ZM9,8.5a3,3,0,1,1,3,3A3,3,0,0,1,9,8.5Zm-2,9a5,5,0,0,1,10,0,1,1,0,0,1-2,0,3,3,0,0,0-6,0,1,1,0,0,1-2,0Z" /></svg></BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

    </nav>
  )
}