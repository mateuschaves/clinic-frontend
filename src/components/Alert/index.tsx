import { useRef, RefObject } from 'react';
import { FocusableElement } from '@chakra-ui/utils';

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    AlertDialogProps,
} from '@chakra-ui/react';

interface onDeleteFunctionProps {
    (): void
}

interface onCloseFunctionProps {
    (): void
}

interface AlertProps extends Omit<AlertDialogProps, 'leastDestructiveRef'> {
    onDelete: onDeleteFunctionProps;
    onClose: onCloseFunctionProps;
    leastDestructiveRef?: RefObject<FocusableElement>;
    isLoading: boolean;
    title: string;
    description: string;
    cancelButtonText: string;
    confirmButtonText: string;
    loadingConfirmButtonText?: string;
}

export default function Alert({ onDelete, onClose, isLoading, title, description, cancelButtonText, confirmButtonText, loadingConfirmButtonText, ...props }: AlertProps) {
    const cancelRef: RefObject<any> = useRef()

    return (
        <AlertDialog
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            {...props}
        >
            <AlertDialogOverlay>
            <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    {title}
                </AlertDialogHeader>

                <AlertDialogBody>
                    {description}
                </AlertDialogBody>

                <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                    {cancelButtonText}
                </Button>
                <Button 
                    colorScheme="red" 
                    onClick={onDelete} 
                    ml={3}
                    isLoading={isLoading}
                    loadingText={loadingConfirmButtonText}
                >
                    {confirmButtonText}
                </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}