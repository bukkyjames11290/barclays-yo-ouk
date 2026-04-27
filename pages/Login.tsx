'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthStore } from '@/store/authStore';
import { LoginSchema } from '@/lib/schemas';
import { toast } from 'sonner';
import LoginHeader from '@/components/LoginHeader';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // ✅ field-level errors
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const router = useRouter();
  const { login, isLoading, error, isAuthenticated, clearError } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  // ✅ show toast but DON'T clear immediately
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // reset field errors
    setErrors({});

    // ✅ Zod validation
    const result = LoginSchema.safeParse({ username, password });

    if (!result.success) {
      const fieldErrors: typeof errors = {};

      result.error.issues.forEach(issue => {
        const field = issue.path[0] as keyof typeof fieldErrors;
        fieldErrors[field] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    const success = await login(username, password);

    if (success) {
      toast.success('Welcome back!');
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LoginHeader />
      <div className="py-5 px-6 bg-[#f2fbfe] text-xl">
        <h1 className="text-[#00395d] border-l-4 border-l-[#00395d] pl-2">Log in to Online Banking</h1>
      </div>
      {/* Login Form */}
      <main className="flex-1 px-6 pb-8 mt-10">
        <div className="max-w-[450px] mx-auto">
          <div className="bg-white rounded-sm p-6 shadow-lg border border-gray-200/50">
            <form onSubmit={handleSubmit} className="space-y-5 mt-3">
              {/* Email */}
              <div className="space-y-3">
                <Label htmlFor="username" className="text-foreground font-semibold">
                  Username
                </Label>

                <div className="relative">
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={e => {
                      setUsername(e.target.value);
                      setErrors(prev => ({ ...prev, username: '' }));
                      clearError(); // clear auth error on typing
                    }}
                    className={`h-11 p-4 rounded-none text-[#5c5c5c] placeholder:text-gray-600 bg-transparent border outline-none ${errors.username ? 'border-red-500' : 'border-gray-500'}`}
                  />
                </div>
                {errors.username && <p className="text-sm text-[#ef4343]">{errors.username}</p>}
              </div>

              {/* Password */}
              <div className="space-y-3">
                <Label htmlFor="password" className="text-foreground font-semibold">
                  Password
                </Label>

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                      setErrors(prev => ({ ...prev, password: '' }));
                      clearError(); // clear auth error on typing
                    }}
                    className={`h-11 p-4 rounded-none text-[#5c5c5c] placeholder:text-gray-600 bg-transparent border outline-none ${errors.password ? 'border-red-500' : 'border-gray-500'}`}
                  />

                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-[#ef4343]">{errors.password}</p>}
              </div>

              {/* Remember Me */}
              <div className="flex flex-col gap-3 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-200 accent-primary" />
                  <span className="text-gray-500">Remember me</span>
                </label>

                <p className="text-xs text-gray-600">To help keep your account secure, save your username only on devices that aren't used by other people.</p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-10 rounded-full bg-[#0076b6] text-white font-semibold text-sm transition-opacity hover:opacity-90 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Continue'
                )}
              </button>
            </form>
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">🔒 Your connection is secure and encrypted</p>
          </div>

          {/* Terms */}
          <div className="mt-6">
            <h3 className="text-sm text-center text-gray-500">All users of our online services are subject to our Privacy Statement and agree to be bound by the Terms of Service.</h3>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center px-6">
        <p className="text-xs text-gray-500">
          Barclays UK PLC and Barclays PLC are each authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority.
        </p>
      </footer>
    </div>
  );
}
