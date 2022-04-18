interface OnMFAuthVerifiedEventArgs {}
interface OnMFAuthLoginEventArgs {
  mfa_code: string;
  mfa_token: string;
}

interface MFAuthFormProps {
  onMFALogin: (e: OnMFAuthLoginEventArgs) => Promise<void>;
}

export default function MFAuthForm(props: MFAuthFormProps): JSX.Element;
