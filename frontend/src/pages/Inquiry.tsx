import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, RefreshCw } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

const Inquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    mobileNumber: '',
    industry: '',
    designation: '',
    companyName: '',
    city: '',
    employeeStrength: '',
    enquiryType: '',
    jobFunction: '',
    requirement: ''
  });
  const [isNotRobot, setIsNotRobot] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isNotRobot) {
      alert("Please verify that you are not a robot.");
      return;
    }

    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await fetch(`${apiUrl}/api/contact/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.workEmail,
          phone: formData.mobileNumber,
          message: `Company: ${formData.companyName}\nIndustry: ${formData.industry}\nDesignation: ${formData.designation}\nCity: ${formData.city}\nEmployees: ${formData.employeeStrength}\nEnquiry Type: ${formData.enquiryType}\nJob Function: ${formData.jobFunction}\nRequirement: ${formData.requirement}`
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#0a0510] px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-[#150f1c] p-12 rounded-lg shadow-2xl text-center border border-white/10"
        >
          <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-serif text-white mb-4 font-bold tracking-widest uppercase">Request Sent</h2>
          <p className="text-white/60 mb-8 leading-relaxed text-sm">
            Thank you for your inquiry. Our corporate wellness team will reach out to you shortly.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full py-4 bg-white text-[#0a0510] rounded font-bold hover:bg-gray-200 transition-all uppercase tracking-widest text-xs"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  const inputClass = "w-full bg-transparent border border-white/20 text-white/90 p-3 outline-none focus:border-white/60 transition-colors text-sm font-light";
  const labelClass = "block text-white font-semibold uppercase tracking-[0.15em] text-[10px] mb-2";

  return (
    <div className="min-h-screen bg-[#07030a] pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 border-b border-white/10 pb-8">
          <h1 className="text-3xl md:text-5xl font-sans text-white font-bold tracking-[0.3em] md:tracking-[0.3em] uppercase">
            Let's Talk About It
          </h1>
        </div>

        {/* Form Container */}
        <div className="border border-white/20 p-6 md:p-10 bg-gradient-to-br from-[#0a0510] to-[#12081c]">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelClass}>First Name</label>
                <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="Ex. John" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Smith" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Work E-Mail</label>
                <input type="email" name="workEmail" required value={formData.workEmail} onChange={handleChange} placeholder="johnsmith@example.com" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Mobile Number</label>
                <input type="tel" name="mobileNumber" required value={formData.mobileNumber} onChange={handleChange} placeholder="+11234567890" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Industry</label>
                <select name="industry" required value={formData.industry} onChange={handleChange} className={`${inputClass} appearance-none bg-[#0a0510]`}>
                  <option className="bg-[#0a0510] text-white" value="" disabled>Select Industry</option>
                  <option className="bg-[#0a0510] text-white" value="Technology">Technology</option>
                  <option className="bg-[#0a0510] text-white" value="Finance">Finance</option>
                  <option className="bg-[#0a0510] text-white" value="Healthcare">Healthcare</option>
                  <option className="bg-[#0a0510] text-white" value="Education">Education</option>
                  <option className="bg-[#0a0510] text-white" value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Your Designation</label>
                <input type="text" name="designation" required value={formData.designation} onChange={handleChange} placeholder="Your Designation" className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Company Name</label>
              <input type="text" name="companyName" required value={formData.companyName} onChange={handleChange} placeholder="Company Name" className={inputClass} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelClass}>City</label>
                <select name="city" required value={formData.city} onChange={handleChange} className={`${inputClass} appearance-none bg-[#0a0510]`}>
                  <option className="bg-[#0a0510] text-white" value="" disabled>Select City</option>
                  <option className="bg-[#0a0510] text-white" value="New York">New York</option>
                  <option className="bg-[#0a0510] text-white" value="London">London</option>
                  <option className="bg-[#0a0510] text-white" value="Dubai">Dubai</option>
                  <option className="bg-[#0a0510] text-white" value="Mumbai">Mumbai</option>
                  <option className="bg-[#0a0510] text-white" value="Remote/Other">Remote / Other</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Employee Strength</label>
                <select name="employeeStrength" required value={formData.employeeStrength} onChange={handleChange} className={`${inputClass} appearance-none bg-[#0a0510]`}>
                  <option className="bg-[#0a0510] text-white" value="" disabled>Select Employee Strength</option>
                  <option className="bg-[#0a0510] text-white" value="1-50">1 - 50</option>
                  <option className="bg-[#0a0510] text-white" value="51-200">51 - 200</option>
                  <option className="bg-[#0a0510] text-white" value="201-500">201 - 500</option>
                  <option className="bg-[#0a0510] text-white" value="500+">500+</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>What is your enquiry for?</label>
                <select name="enquiryType" required value={formData.enquiryType} onChange={handleChange} className={`${inputClass} appearance-none bg-[#0a0510]`}>
                  <option className="bg-[#0a0510] text-white" value="" disabled>Select Enquiry Type</option>
                  <option className="bg-[#0a0510] text-white" value="WorkFit Corporate">WorkFit Corporate Wellness</option>
                  <option className="bg-[#0a0510] text-white" value="LiveFit Platform">LiveFit Platform Access</option>
                  <option className="bg-[#0a0510] text-white" value="Team Challenge">Team Building Challenges</option>
                  <option className="bg-[#0a0510] text-white" value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Job Function</label>
                <select name="jobFunction" required value={formData.jobFunction} onChange={handleChange} className={`${inputClass} appearance-none bg-[#0a0510]`}>
                  <option className="bg-[#0a0510] text-white" value="" disabled>--None--</option>
                  <option className="bg-[#0a0510] text-white" value="HR">Human Resources</option>
                  <option className="bg-[#0a0510] text-white" value="Operations">Operations</option>
                  <option className="bg-[#0a0510] text-white" value="Management">Management</option>
                  <option className="bg-[#0a0510] text-white" value="Employee">Employee</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>Briefly describe your corporate requirement</label>
              <textarea 
                name="requirement" 
                required 
                value={formData.requirement} 
                onChange={handleChange}
                rows={4}
                placeholder="Enter your message here" 
                className={`${inputClass} resize-none`}
              ></textarea>
            </div>

            {/* Real reCAPTCHA */}
            <div className="flex items-center gap-4 mt-6">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={(token) => setIsNotRobot(!!token)}
                theme="dark"
              />
            </div>

            <div className="mt-10">
              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-white hover:bg-gray-100 text-[#ff4b72] rounded-md font-bold uppercase tracking-[0.2em] text-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Request a Demo'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
