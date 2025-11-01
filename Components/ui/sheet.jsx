import React, { useState } from 'react'
import { cn } from '../../lib/utils'

const SheetContext = React.createContext()

const Sheet = ({ children, ...props }) => {
    const [open, setOpen] = useState(false)
    return (
        <SheetContext.Provider value={{ open, setOpen }}>
            {children}
        </SheetContext.Provider>
    )
}

const SheetTrigger = React.forwardRef(({ asChild, children, ...props }, ref) => {
    const { setOpen } = React.useContext(SheetContext)
    
    if (asChild) {
        return React.cloneElement(React.Children.only(children), {
            onClick: () => setOpen(true),
            ...props
        })
    }
    
    return (
        <button
            ref={ref}
            onClick={() => setOpen(true)}
            {...props}
        >
            {children}
        </button>
    )
})
SheetTrigger.displayName = "SheetTrigger"

const SheetContent = React.forwardRef(({ side = 'right', className, children, ...props }, ref) => {
    const { open, setOpen } = React.useContext(SheetContext)
    
    if (!open) return null
    
    const sideClasses = {
        right: "right-0 top-0 h-full",
        left: "left-0 top-0 h-full",
        top: "top-0 left-0 w-full",
        bottom: "bottom-0 left-0 w-full"
    }
    
    return (
        <>
            <div 
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setOpen(false)}
            />
            <div
                ref={ref}
                className={cn(
                    "fixed z-50 p-6 shadow-lg transition ease-in-out",
                    sideClasses[side],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </>
    )
})
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetContent }

