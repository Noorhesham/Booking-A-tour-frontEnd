import { getUser } from "@/actions/getUser";
import NavItem from "@/components/NavItem";
import UpdateForm from "@/components/UpdateForm";
import UpdatePassword from "@/components/UpdatePassword";
import React from "react";

const page = async () => {
  const user = await getUser();
  const isAdmin = user.role === "admin";
  return (
    <main className="main">
      <div className="user-view">
        <nav className="user-view__menu">
          <ul className="side-nav">
            <NavItem link="#" text="Settings" icon="settings" />
            <NavItem link="/my-tours" text="My bookings" icon="briefcase" />
            <NavItem link="#" text="My reviews" icon="star" />
            <NavItem link="#" text="Billing" icon="credit-card" />
          </ul>

          {isAdmin && (
            <div className="admin-nav">
              <h5 className="admin-nav__heading">Admin</h5>
              <ul className="side-nav">
                <NavItem link="#" text="Manage tours" icon="map" />
                <NavItem link="#" text="Manage users" icon="users" />
                <NavItem link="#" text="Manage reviews" icon="star" />
                <NavItem link="#" text="Manage bookings" icon="briefcase" />
              </ul>
            </div>
          )}
        </nav>

        <div className="user-view__content">
          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">Your account settings</h2>

            <UpdateForm user={user} />
          </div>

          <div className="line">&nbsp;</div>

          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">Password change</h2>
          <UpdatePassword/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
