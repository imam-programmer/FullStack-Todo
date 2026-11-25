/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AuthPage, User } from '../types';
import { authService } from '../services/authService';
import { Navbar } from '../components/Navbar';
import { RegisterView } from '../components/RegisterView';
import { EmailVerifyView } from '../components/EmailVerifyView';
import { LoginView } from '../components/LoginView';
import { ForgotPasswordView } from '../components/ForgotPasswordView';
import { ResetPasswordView } from '../components/ResetPasswordView';
import { TodoView } from '../components/TodoView';

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<AuthPage>('register');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pendingEmail, setPendingEmail] = useState<string>('mahdihasansojip@gmail.com');

  // Check persisted user on initial load
  useEffect(() => {
    const existingUser = authService.getCurrentUser();
    if (existingUser) {
      setCurrentUser(existingUser);
    }
  }, []);

  const handleNavigate = (page: AuthPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRegistered = (email: string) => {
    setPendingEmail(email);
    setCurrentPage('verify-email');
  };



  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setCurrentPage('todos');
  };


  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Bar Navigation */}
     

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center items-center p-3 sm:p-6 lg:p-8">
    
          <RegisterView
            onNavigate={handleNavigate}
            onRegistered={handleRegistered}
            onGoogleSuccess={handleLoginSuccess}
          />
      </main>

      {/* Clean Footer */}
    
    </div>
  );
}
