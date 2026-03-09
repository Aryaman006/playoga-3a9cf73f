import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo showTagline />
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Transforming wellness from a luxury into a way of life. Join our
              global community of mindful practitioners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://blog.playoga.co.in/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link
                  to="/classes"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Live Classes
                </Link>
              </li>
              <li>
                <a
                  href="https://app.playoga.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Download App
                </a>
              </li>
              <li>
                <a
                  href="https://app.playoga.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Media & Events
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Connect</h4>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://app.playoga.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://app.playoga.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube size={18} />
              </a>

              <a
                href="https://app.playoga.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://app.playoga.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-muted-foreground mb-6 space-y-1">
              <p>
                <span className="font-medium text-foreground">Email:</span>{" "}
                <a
                  href="mailto:care@playoga.co.in"
                  className="hover:text-primary transition-colors"
                >
                  care@playoga.co.in
                </a>
              </p>

              <p>
                <span className="font-medium text-foreground">Helpline:</span>{" "}
                <a
                  href="tel:+919988365123"
                  className="hover:text-primary transition-colors"
                >
                  +91 9988365123
                </a>
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex gap-3">
              <a
                href="https://app.playoga.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-charcoal text-primary-foreground rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
              >
                App Store
              </a>

              <a
                href="https://app.playoga.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-charcoal text-primary-foreground rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
              >
                Play Store
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Playoga Wellness & Education Private
              Limited. All rights reserved.
            </p>

           <p className="text-xs text-muted-foreground mt-1">
  Contact:{" "}
  <a
    href="mailto:care@playoga.co.in"
    className="hover:text-primary transition-colors"
  >
    care@playoga.co.in
  </a>
</p>
          </div>

          <div className="flex gap-6">
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>

            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;