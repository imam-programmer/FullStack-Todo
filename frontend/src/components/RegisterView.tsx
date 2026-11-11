import React, { useState } from "react";
import { AuthPage, User } from "../types";
import {
  UserPlus,
  Mail,
  Lock,
  User as UserIcon,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import axios from "axios";

interface RegisterViewProps {
  onNavigate: (page: AuthPage) => void;
  onRegistered: (email: string) => void;
  onGoogleSuccess: (user: User) => void;
}

export const RegisterView: React.FC<RegisterViewProps> = ({
  onNavigate

}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formInputs, setformInputs] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [loading, setLoading] = useState(false);
  const [Success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let datapost= await axios.post("http://localhost:5000/ragistration",formInputs)
    
    setSuccess(datapost.data.message)
    setformInputs({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  })


  };


function handleChange(e: { target: { name: string; value: any; }; }){

setformInputs({
  ...formInputs,[e.target.name]:e.target.name=="terms"? !formInputs.terms:e.target.value
})
}

  return (
    <div className="w-full max-w-md mx-auto py-8 px-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <UserPlus className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Create an Account
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Sign up to manage your tasks with full backend support
          </p>
        </div>

        {Success && (
          <div className="mb-5 p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs font-medium">
            {Success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <UserIcon className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                 name="fullname"

                value={formInputs.fullname}
                onChange={handleChange}
                placeholder="e.g. Mahdi Hasan"
                className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Email with Quick Google button */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-slate-700">
                Gmail / Email Address
              </label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                name="email"
                value={formInputs.email}
                onChange={handleChange}
                placeholder="you@gmail.com"
                className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                   name='password'
                value={formInputs.password}
                onChange={handleChange}
                placeholder="At least 6 characters"
                className="w-full pl-9 pr-10 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-hidden"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                  name='confirmPassword'
                value={formInputs.confirmPassword}
                onChange={handleChange}
                placeholder="Re-type your password"
                className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors placeholder:text-slate-400"
              />
            </div>
            {formInputs.password && formInputs.confirmPassword && (
              <p
                className={`text-[11px] mt-1 font-medium ${formInputs.password === formInputs.confirmPassword ? "text-emerald-600" : "text-rose-500"}`}
              >
                {formInputs.password === formInputs.confirmPassword
                  ? "✓ Passwords match"
                  : "✕ Passwords do not match"}
              </p>
            )}
          </div>

          {/* Terms checkbox */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formInputs.terms}
              onChange={handleChange}
              className="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500 focus:ring-offset-0"
            />
            <label
              htmlFor="terms"
              className="text-xs text-slate-600 cursor-pointer"
            >
              I agree to the{" "}
              <span className="text-indigo-600 hover:underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-indigo-600 hover:underline">
                Privacy Policy
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Continue to Email Verification</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Footer link */}
        <div className="mt-6 pt-5 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500">
            Already have an account?{" "}
            <button
              onClick={() => onNavigate("login")}
              className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
