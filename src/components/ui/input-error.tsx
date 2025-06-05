function InputError({ message }: { message?: string }) {
  if (!message) {
    return <div className={'text-destructive h-6'} />;
  }
  return <div className={'text-destructive h-6'}>{message}</div>;
}

export default InputError;
