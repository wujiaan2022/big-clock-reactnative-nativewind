// src/errors/globalErrorHandler.ts
export function installGlobalErrorHandler() {
  const ErrorUtilsAny = (global as any).ErrorUtils;
  const previous = ErrorUtilsAny?.getGlobalHandler?.();

  ErrorUtilsAny?.setGlobalHandler?.((e: any, isFatal?: boolean) => {
    try {
      console.error('GLOBAL_ERROR', { error: e, isFatal });
    } catch {}
    previous?.(e, isFatal);
  });

  // Optional: unhandled promise rejections (supported on web; on native it’s a no-op)
  try {
    (process as any).on?.('unhandledRejection', (reason: any) => {
      console.error('UNHANDLED_REJECTION', reason);
    });
  } catch {}
}
