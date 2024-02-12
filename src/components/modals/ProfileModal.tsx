"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ProfileForm } from "../forms/ProfileForm";
import { User } from "lucide-react";

export function ProfileModal() {
  const handleOpenChange = (newOpen) => {
    console.log("Dialog open state changed to:", newOpen);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="gap-1">
          <User className="h-4 w-4" />
          <p>Profile</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            View your profile information below.
          </DialogDescription>
        </DialogHeader>
        <ProfileForm />
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="default">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
