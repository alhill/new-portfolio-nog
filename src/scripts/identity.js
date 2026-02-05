if (typeof window !== 'undefined') {
  (async () => {
    const { default: netlifyIdentity } = await import('netlify-identity-widget');

    const openFromHash = () => {
      const hash = window.location.hash || '';
      const hasRecoveryToken = hash.includes('recovery_token=') || hash.includes('recovery-token=');
      const hasInviteToken = hash.includes('invite_token=') || hash.includes('invite-token=');

      if (hasInviteToken && !hasRecoveryToken) {
        netlifyIdentity.open('signup');
        return;
      }

      if (hasRecoveryToken) {
        netlifyIdentity.open('recovery');
      }
    };

    netlifyIdentity.on('init', () => {
      openFromHash();
    });

    window.addEventListener('hashchange', openFromHash);

    netlifyIdentity.init();
  })();
}