"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

type BackdropType = "opaque" | "blur" | "transparent";

interface LoginModalProps {
  isOpen: boolean;
  onClose: boolean;
}

export default function LoginModal({
  isOpen,
  onClose,
}: LoginModalProps): JSX.Element {
  const { onOpen } = useDisclosure();
  const [backdrop, setBackdrop] = useState<BackdropType>("opaque");

  const backdrops: BackdropType[] = ["opaque", "blur", "transparent"];

  const handleOpen = (backdropValue: BackdropType) => {
    setBackdrop(backdropValue);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button
            key={b}
            className="capitalize"
            color="warning"
            variant="flat"
            onPress={() => handleOpen(b)}
          >
            {b}
          </Button>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(closeHandler: any) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Oops!</ModalHeader>
              <ModalBody>
                <p>You need to be signed in to be able to visit this page</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={closeHandler}>
                  Close
                </Button>
                <Button color="primary" href="/signup">
                  Sign up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

// "use-client";

// import React from "react";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
// } from "@heroui/react";

// export default function App() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [backdrop, setBackdrop] = React.useState("opaque");

//   const backdrops = ["opaque", "blur", "transparent"];

//   const handleOpen = (backdrop) => {
//     setBackdrop(backdrop);
//     onOpen();
//   };

//   return (
//     <>
//       <div className="flex flex-wrap gap-3">
//         {backdrops.map((b) => (
//           <Button
//             key={b}
//             className="capitalize"
//             color="warning"
//             variant="flat"
//             onPress={() => handleOpen(b)}
//           >
//             {b}
//           </Button>
//         ))}
//       </div>
//       <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">
//                 Modal Title
//               </ModalHeader>
//               <ModalBody>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam pulvinar risus non risus hendrerit venenatis.
//                   Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                 </p>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam pulvinar risus non risus hendrerit venenatis.
//                   Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                 </p>
//                 <p>
//                   Magna exercitation reprehenderit magna aute tempor cupidatat
//                   consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
//                   incididunt cillum quis. Velit duis sit officia eiusmod Lorem
//                   aliqua enim laboris do dolor eiusmod. Et mollit incididunt
//                   nisi consectetur esse laborum eiusmod pariatur proident Lorem
//                   eiusmod et. Culpa deserunt nostrud ad veniam.
//                 </p>
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="light" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button color="primary" onPress={onClose}>
//                   Action
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
